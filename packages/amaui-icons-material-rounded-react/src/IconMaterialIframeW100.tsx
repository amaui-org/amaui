import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIframeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeW100'

      short_name='Iframe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M444 652h232V540H444v112Zm2 28q-13 0-21.5-8.5T416 650V542q0-13 8.5-21.5T446 512h228q13 0 21.5 8.5T704 542v108q0 13-8.5 21.5T674 680H446ZM192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22V416H160v368q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialIframeW100.displayName = 'AmauiIconMaterialIframeW100';

export default IconMaterialIframeW100;
