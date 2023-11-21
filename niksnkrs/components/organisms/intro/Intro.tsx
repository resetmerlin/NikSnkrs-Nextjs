import './Intro.scss';
import {
  IntroBackground,
  IntroCenter,
  IntroLeft,
  IntroRight,
} from '../../molecules/intro';

/**
 * Responsible for making intro organisms
 *
 * - Responsible for components begin to have the final shape
 * - Responsible for combination of molecules that work together or atoms that compose more elaborate interfaces
 */
export default function Intro() {
  return (
    <div className="intro">
      <IntroLeft />
      <IntroCenter />
      <IntroBackground />
      <IntroRight />
    </div>
  );
}
