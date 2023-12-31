import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrossword = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crossword'

      short_name='Crossword'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-160h160v-160H400v160ZM160-400h160v-160H160v160Zm240 0h160v-160H400v160Zm240 0h160v-160H640v160Zm0-240h160v-160H640v160ZM320-80v-240H80v-320h480v-240h320v560H640v240H320Z"/>
    </Icon>
  );
});

IconMaterialCrossword.displayName = 'AmauiIconMaterialCrossword';

export default IconMaterialCrossword;
