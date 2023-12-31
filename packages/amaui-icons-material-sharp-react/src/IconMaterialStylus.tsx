import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stylus'

      short_name='Stylus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m358-160-250 52 52-250 198 198Zm0 0L160-358l515-515 198 198-515 515Zm-12-101 414-414-85-85-414 414 85 85Z"/>
    </Icon>
  );
});

IconMaterialStylus.displayName = 'AmauiIconMaterialStylus';

export default IconMaterialStylus;
