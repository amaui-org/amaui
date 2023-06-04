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
      <path d="M40 736V416h80v320H40Zm120 0V416h80l89 178-9 2V416h80v320h-80l-89-178 9-2v180h-80Zm360 0V496h-80v-80h240v80h-80v240h-80Zm200 0V416h80v240h120v80H720Z"/>
    </Icon>
  );
});

IconMaterialLanguageInternationalFilled.displayName = 'AmauiIconMaterialLanguageInternationalFilled';

export default IconMaterialLanguageInternationalFilled;
