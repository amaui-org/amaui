import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlucoseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlucoseFilled'

      short_name='Glucose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M502 976 222 650l96-72 102 65V216h80v400h60V376h80v240h60V416h80v200h60V496h80v480H502ZM180 496q-59 0-99.5-40.5T40 358q0-34 13.5-59t63.5-82l63-72 63 73q51 59 64 83t13 57q0 57-41 97.5T180 496Z"/>
    </Icon>
  );
});

IconMaterialGlucoseFilled.displayName = 'AmauiIconMaterialGlucoseFilled';

export default IconMaterialGlucoseFilled;
