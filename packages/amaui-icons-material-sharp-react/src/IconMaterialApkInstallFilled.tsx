import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApkInstallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkInstallFilled'

      short_name='ApkInstall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 22-4-4 1.4-1.425L19 18.15V14h2v4.15l1.6-1.575L24 18ZM4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h8l6 6v4.25h-3V22Zm7-13h5l-5-5ZM5 19h10q-.1-1.225-.75-2.25t-1.7-1.625l.95-1.7q.05-.1.025-.225t-.15-.175q-.1-.05-.212-.025-.113.025-.163.125l-.975 1.75q-.5-.2-1-.313-.5-.112-1.025-.112-.525 0-1.025.112-.5.113-1 .313L7 13.125Q6.95 13 6.838 13q-.113 0-.238.05l-.1.375.95 1.7q-1.05.6-1.7 1.625Q5.1 17.775 5 19Zm2.75-1.5q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15Zm4.5 0q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15Z"/>
    </Icon>
  );
});

IconMaterialApkInstallFilled.displayName = 'AmauiIconMaterialApkInstallFilled';

export default IconMaterialApkInstallFilled;
