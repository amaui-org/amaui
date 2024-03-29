import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageGbEnglish = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageGbEnglish'

      short_name='LanguageGbEnglish'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M600 696h160v-80H600v80Zm0-160h160v-80H600v80ZM200 776q-33 0-56.5-23.5T120 696V456q0-33 23.5-56.5T200 376h160q33 0 56.5 23.5T440 456H200v240h160v-80h-40q-17 0-28.5-11.5T280 576q0-17 11.5-28.5T320 536h80q17 0 28.5 11.5T440 576v120q0 33-23.5 56.5T360 776H200Zm360 0q-17 0-28.5-11.5T520 736V416q0-17 11.5-28.5T560 376h200q33 0 56.5 23.5T840 456v60q0 25-17.5 42.5T780 576q25 0 42.5 17.5T840 636v60q0 33-23.5 56.5T760 776H560Z"/>
    </Icon>
  );
});

IconMaterialLanguageGbEnglish.displayName = 'AmauiIconMaterialLanguageGbEnglish';

export default IconMaterialLanguageGbEnglish;
