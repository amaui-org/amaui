import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUsColemak = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsColemak'

      short_name='LanguageUsColemak'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M580 696h140V456H580v240Zm-340 80q-33 0-56.5-23.5T160 696V456q0-33 23.5-56.5T240 376h140q17 0 28.5 11.5T420 416q0 17-11.5 28.5T380 456H240v240h140q17 0 28.5 11.5T420 736q0 17-11.5 28.5T380 776H240Zm340 0q-33 0-56.5-23.5T500 696V456q0-33 23.5-56.5T580 376h140q33 0 56.5 23.5T800 456v240q0 33-23.5 56.5T720 776H580Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsColemak.displayName = 'AmauiIconMaterialLanguageUsColemak';

export default IconMaterialLanguageUsColemak;
