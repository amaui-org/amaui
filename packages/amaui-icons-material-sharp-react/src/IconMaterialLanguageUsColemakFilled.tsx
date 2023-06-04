import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUsColemakFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsColemakFilled'

      short_name='LanguageUsColemak'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M580 696h140V456H580v240Zm-420 80V376h260v80H240v240h180v80H160Zm340 0V376h300v400H500Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsColemakFilled.displayName = 'AmauiIconMaterialLanguageUsColemakFilled';

export default IconMaterialLanguageUsColemakFilled;
