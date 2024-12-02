import React from 'react';
import Link from 'next/link';
import { StyledList } from '../AppStyles';
import { useRouter } from 'next/router';
import appState from '../appState';

const Subnav = () => {
  const router = useRouter();
  return (
    (<nav>
      <StyledList>
        <li>
          <Link href={`/about`} className='styled-link'>
            About > 
          </Link>
        </li>
        {appState.about.map((p, i, arr) => {
          const isActive = router.pathname.endsWith(p.routeName);
          return (
            (<li key={p.title}>
              <Link
                href={`/about/${p.routeName}`}
                className={`styled-link${isActive ? ' active' : ''}`}>
                {p.title}
              </Link>
              {i < arr.length - 1 && <span> | </span>}
            </li>)
          );
        })}
      </StyledList>
    </nav>)
  );
};
export default Subnav;
