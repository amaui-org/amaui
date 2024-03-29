import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageInternationalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageInternationalFilled'

      short_name='LanguageInternational'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 736q-17 0-28.5-11.5T40 696V456q0-17 11.5-28.5T80 416q17 0 28.5 11.5T120 456v240q0 17-11.5 28.5T80 736Zm120 0q-17 0-28.5-11.5T160 696V452q0-15 10.5-25.5T196 416h22q11 0 19 5.5t13 14.5l70 140V456q0-17 11.5-28.5T360 416q17 0 28.5 11.5T400 456v244q0 15-10.5 25.5T364 736h-22q-11 0-19-5.5T310 716l-70-140v120q0 17-11.5 28.5T200 736Zm360 0q-17 0-28.5-11.5T520 696V496h-40q-17 0-28.5-11.5T440 456q0-17 11.5-28.5T480 416h160q17 0 28.5 11.5T680 456q0 17-11.5 28.5T640 496h-40v200q0 17-11.5 28.5T560 736Zm200 0q-17 0-28.5-11.5T720 696V456q0-17 11.5-28.5T760 416q17 0 28.5 11.5T800 456v200h80q17 0 28.5 11.5T920 696q0 17-11.5 28.5T880 736H760Z"/>
    </Icon>
  );
});

IconMaterialLanguageInternationalFilled.displayName = 'AmauiIconMaterialLanguageInternationalFilled';

export default IconMaterialLanguageInternationalFilled;
