import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenRunW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenRunW100'

      short_name='OpenRun'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-172 82-81 19 20-101 101-101-101 20-20 81 81ZM172-480l81 81-20 20-101-101 101-101 20 19-81 82Zm617 0-81-82 19-19 101 101-101 101-19-20 81-81ZM480-789l-81 81-20-19 101-101 101 101-19 19-82-81Z"/>
    </Icon>
  );
});

IconMaterialOpenRunW100.displayName = 'AmauiIconMaterialOpenRunW100';

export default IconMaterialOpenRunW100;
