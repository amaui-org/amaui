import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApkInstall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkInstall'

      short_name='ApkInstall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h8l6 6v4.25h-2V9h-5V4H4v16h11v2Zm0-2V4v16Zm1-1q.1-1.225.75-2.25t1.7-1.625l-.95-1.7q0-.025.1-.375.125-.05.238-.05.112 0 .162.125l.975 1.75q.5-.2 1-.313.5-.112 1.025-.112.525 0 1.025.112.5.113 1 .313l.975-1.75.375-.1q.125.05.15.175.025.125-.025.225l-.95 1.7q1.05.6 1.7 1.625.65 1.025.75 2.25Zm2.75-1.5q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm4.5 0q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM20 22l-4-4 1.4-1.425L19 18.15V14h2v4.15l1.6-1.575L24 18Z"/>
    </Icon>
  );
});

IconMaterialApkInstall.displayName = 'AmauiIconMaterialApkInstall';

export default IconMaterialApkInstall;
