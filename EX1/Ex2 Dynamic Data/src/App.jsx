import React from 'react';
import { InformationCircleIcon as Icon } from '@heroicons/react/20/solid';
import './style.css';

// Use curly braces to display banner data
export default function Banner() {
  const bannerData = {
    icon: <Icon className="size-6 banner-icon" aria-hidden="true" />,
    version: 5,
    href: '/details',
  };

  return (
    <div className='w-full'>
      <div className="banner-wrapper">
        <div className="flex">
          <div className="flex-shrink-0"></div>
          <div className="banner-content">
            <p className="banner-text">
              A new software update is available. See what’s new in version ${bannerData.version}
            </p>
            <p className="banner-details flex">
              <a className="banner-details-link" href={bannerData.href}>
                Details<span>{bannerData.icon}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
