import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdaW100Filled'

      short_name='Eda'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 978V732h155l127 169 174-174 159-95 68 50-296 296H172Zm143-414V216h28v348h114.5V176H485v388h114.5V256H628v432L457 859 341 704H172V296h28v268h115Z"/>
    </Icon>
  );
});

IconMaterialEdaW100Filled.displayName = 'AmauiIconMaterialEdaW100Filled';

export default IconMaterialEdaW100Filled;
