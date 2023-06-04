import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsRemoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsRemoteW100'

      short_name='SettingsRemote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.65 22.35h-5.3q-.3 0-.5-.2t-.2-.5v-11.3q0-.3.2-.5t.5-.2h5.3q.3 0 .5.2t.2.5v11.3q0 .3-.2.5t-.5.2ZM12 13.7q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm0-8.35q-.875 0-1.7.25t-1.55.75q-.125.1-.262.088-.138-.013-.238-.138-.1-.125-.087-.263.012-.137.137-.212.75-.55 1.7-.863.95-.312 2-.312t2 .312q.95.313 1.7.863.125.075.138.212.012.138-.088.263-.1.125-.225.138-.125.012-.25-.063-.725-.5-1.562-.763Q12.875 5.35 12 5.35Zm0-4q-1.725 0-3.238.562-1.512.563-2.837 1.613-.125.1-.275.087-.15-.012-.25-.137-.125-.125-.088-.275.038-.15.163-.275 1.35-1.05 3.013-1.663Q10.15.65 12 .65t3.513.6q1.662.6 3.012 1.675.125.125.163.275.037.15-.063.275-.125.125-.275.137-.15.013-.275-.087-1.3-1.05-2.825-1.613Q13.725 1.35 12 1.35Zm-2.65 20.3h5.3v-11.3h-5.3Zm0 0h5.3Z"/>
    </Icon>
  );
});

IconMaterialSettingsRemoteW100.displayName = 'AmauiIconMaterialSettingsRemoteW100';

export default IconMaterialSettingsRemoteW100;
