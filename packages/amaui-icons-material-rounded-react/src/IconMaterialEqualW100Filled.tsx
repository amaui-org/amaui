import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEqualW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualW100Filled'

      short_name='Equal'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M220 724q-14.167 0-24.083-9.882-9.917-9.883-9.917-24Q186 676 195.917 666q9.916-10 24.083-10h520q14.167 0 24.083 9.882 9.917 9.883 9.917 24Q774 704 764.083 714q-9.916 10-24.083 10H220Zm0-228q-14.167 0-24.083-9.882-9.917-9.883-9.917-24Q186 448 195.917 438q9.916-10 24.083-10h520q14.167 0 24.083 9.882 9.917 9.883 9.917 24Q774 476 764.083 486q-9.916 10-24.083 10H220Z"/>
    </Icon>
  );
});

IconMaterialEqualW100Filled.displayName = 'AmauiIconMaterialEqualW100Filled';

export default IconMaterialEqualW100Filled;
