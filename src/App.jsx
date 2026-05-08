import { useEffect, useMemo, useState } from 'react';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import { stories } from './data/stories.js';
import Home from './sections/Home.jsx';
import Background from './sections/Background.jsx';
import Stories from './sections/Stories.jsx';
import StoryDetail from './sections/StoryDetail.jsx';
import Themes from './sections/Themes.jsx';
import Method from './sections/Method.jsx';
import About from './sections/About.jsx';
import ShareStory from './sections/ShareStory.jsx';
import Interview from './sections/Interview.jsx';

const viewPaths = {
  home: '/',
  background: '/background',
  stories: '/stories',
  themes: '/themes',
  method: '/method',
  about: '/about',
  share: '/share-your-story',
  interview: '/request-interview',
};

function routeToState(pathname = window.location.pathname, search = window.location.search) {
  const storyMatch = pathname.match(/^\/stories\/([^/]+)$/);
  const params = new URLSearchParams(search);

  if (storyMatch) {
    return { view: 'story-detail', selectedStoryId: storyMatch[1], filter: params.get('theme') || 'all' };
  }

  const view = Object.entries(viewPaths).find(([, path]) => path === pathname)?.[0] || 'home';

  return {
    view,
    selectedStoryId: stories[0]?.id || '001',
    filter: params.get('theme') || 'all',
  };
}

function stateToPath({ view, selectedStoryId, filter }) {
  const path = view === 'story-detail'
    ? `/stories/${selectedStoryId}`
    : viewPaths[view] || viewPaths.home;
  const query = view === 'stories' && filter && filter !== 'all'
    ? `?theme=${encodeURIComponent(filter)}`
    : '';

  return `${path}${query}`;
}

export default function App() {
  const initialRoute = routeToState();
  const [view, setView] = useState(initialRoute.view);
  const [filter, setFilter] = useState(initialRoute.filter);
  const [selectedStoryId, setSelectedStoryId] = useState(initialRoute.selectedStoryId);

  useEffect(() => {
    const currentPath = stateToPath({ view, selectedStoryId, filter });
    if (window.location.pathname + window.location.search !== currentPath) {
      window.history.replaceState({ view, selectedStoryId, filter }, '', currentPath);
    }

    function handlePopState() {
      const nextRoute = routeToState();
      setView(nextRoute.view);
      setFilter(nextRoute.filter);
      setSelectedStoryId(nextRoute.selectedStoryId);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, selectedStoryId]);

  const selectedStory = useMemo(
    () => stories.find((story) => story.id === selectedStoryId) ?? stories[0],
    [selectedStoryId],
  );

  function pushRoute(nextState) {
    const nextPath = stateToPath(nextState);
    const currentPath = window.location.pathname + window.location.search;

    if (nextPath !== currentPath) {
      window.history.pushState(nextState, '', nextPath);
    }
  }

  function navigate(nextView) {
    const nextState = {
      view: nextView,
      selectedStoryId,
      filter: nextView === 'stories' ? filter : 'all',
    };

    pushRoute(nextState);
    setFilter(nextState.filter);
    setView(nextView);
  }

  function openStory(id) {
    pushRoute({ view: 'story-detail', selectedStoryId: id, filter });
    setSelectedStoryId(id);
    setView('story-detail');
  }

  function openTheme(themeId) {
    pushRoute({ view: 'stories', selectedStoryId, filter: themeId });
    setFilter(themeId);
    setView('stories');
  }

  function changeFilter(nextFilter) {
    pushRoute({ view: 'stories', selectedStoryId, filter: nextFilter });
    setFilter(nextFilter);
  }

  return (
    <>
      <NavBar currentView={view} onNavigate={navigate} />
      <main>
        <section className={`view${view === 'home' ? ' active' : ''}`}>
          <Home onNavigate={navigate} onStorySelect={openStory} onThemeSelect={openTheme} />
        </section>
        <section className={`view${view === 'background' ? ' active' : ''}`}>
          <Background onNavigate={navigate} />
        </section>
        <section className={`view${view === 'stories' ? ' active' : ''}`}>
          <Stories filter={filter} onFilterChange={changeFilter} onStorySelect={openStory} />
        </section>
        <section className={`view${view === 'story-detail' ? ' active' : ''}`}>
          <StoryDetail story={selectedStory} onBack={() => navigate('stories')} onStorySelect={openStory} />
        </section>
        <section className={`view${view === 'themes' ? ' active' : ''}`}>
          <Themes onStorySelect={openStory} />
        </section>
        <section className={`view${view === 'method' ? ' active' : ''}`}>
          <Method />
        </section>
        <section className={`view${view === 'about' ? ' active' : ''}`}>
          <About />
        </section>
        <section className={`view${view === 'share' ? ' active' : ''}`}>
          <ShareStory />
        </section>
        <section className={`view${view === 'interview' ? ' active' : ''}`}>
          <Interview />
        </section>
      </main>
      <Footer onNavigate={navigate} />
    </>
  );
}
