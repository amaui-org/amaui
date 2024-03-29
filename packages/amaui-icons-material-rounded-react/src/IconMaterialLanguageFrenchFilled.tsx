import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageFrenchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageFrenchFilled'

      short_name='LanguageFrench'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 776q-17 0-28.5-11.5T160 736V416q0-17 11.5-28.5T200 376h200q17 0 28.5 11.5T440 416q0 17-11.5 28.5T400 456H240v80h120q17 0 28.5 11.5T400 576q0 17-11.5 28.5T360 616H240v120q0 17-11.5 28.5T200 776Zm360 0q-17 0-28.5-11.5T520 736V416q0-17 11.5-28.5T560 376h160q33 0 56.5 23.5T800 456v80q0 32-22 54.5T726 616l49 106q9 19-2.5 36.5T740 776q-11 0-20-6t-14-16l-65-138h-41v120q0 17-11.5 28.5T560 776Zm40-240h120v-80H600v80Z"/>
    </Icon>
  );
});

IconMaterialLanguageFrenchFilled.displayName = 'AmauiIconMaterialLanguageFrenchFilled';

export default IconMaterialLanguageFrenchFilled;
