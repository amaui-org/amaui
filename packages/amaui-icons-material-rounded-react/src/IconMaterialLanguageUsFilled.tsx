import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsFilled'

      short_name='LanguageUs'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 776q-33 0-56.5-23.5T160 696V416q0-17 11.5-28.5T200 376q17 0 28.5 11.5T240 416v280h120V416q0-17 11.5-28.5T400 376q17 0 28.5 11.5T440 416v280q0 33-23.5 56.5T360 776H240Zm360 0q-33 0-56.5-23.5T520 696q0-17 11.5-28.5T560 656q16 0 28 14.5t12 25.5h120v-80H600q-33 0-56.5-23.5T520 536v-80q0-33 23.5-56.5T600 376h120q33 0 56.5 23.5T800 456q0 17-11.5 28.5T760 496q-17 0-28.5-11.5T720 456H600v80h120q33 0 56.5 23.5T800 616v80q0 33-23.5 56.5T720 776H600Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsFilled.displayName = 'AmauiIconMaterialLanguageUsFilled';

export default IconMaterialLanguageUsFilled;
