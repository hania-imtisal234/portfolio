import { useLocation, useNavigate } from 'react-router-dom';

const sections = ['/', '/about', '/projects', '/contact', '/footer'];

export default function useSectionNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = sections.indexOf(location.pathname);

  const goNext = () => {
    if (currentIndex < sections.length - 1) {
      navigate(sections[currentIndex + 1]);
    }
  };
  const goPrev = () => {
    if (currentIndex > 0) {
      navigate(sections[currentIndex - 1]);
    }
  };

  return {
    currentIndex,
    goNext,
    goPrev,
    hasNext: currentIndex < sections.length - 1,
    hasPrev: currentIndex > 0,
    sections,
  };
} 