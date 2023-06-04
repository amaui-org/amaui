import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUs'

      short_name='LanguageUs'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 776V376h80v320h120V376h80v400H160Zm360 0V656h80v40h120v-80H520V376h280v120h-80v-40H600v80h200v240H520Z"/>
    </Icon>
  );
});

IconMaterialLanguageUs.displayName = 'AmauiIconMaterialLanguageUs';

export default IconMaterialLanguageUs;
