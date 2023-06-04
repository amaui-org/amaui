import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageGbEnglishFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageGbEnglishFilled'

      short_name='LanguageGbEnglish'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M600 696h160v-80H600v80Zm0-160h160v-80H600v80ZM120 776V376h320v80H200v240h160v-80h-80v-80h160v240H120Zm400 0V376h280l40 40v120l-40 40 40 40v120l-40 40H520Z"/>
    </Icon>
  );
});

IconMaterialLanguageGbEnglishFilled.displayName = 'AmauiIconMaterialLanguageGbEnglishFilled';

export default IconMaterialLanguageGbEnglishFilled;
