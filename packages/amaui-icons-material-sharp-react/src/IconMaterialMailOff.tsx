import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailOff'

      short_name='MailOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M383-463Zm194-34ZM791-55 686-160H80v-640h80l80 80h-80v480h446L55-791l57-57 736 736-57 57Zm89-139-80-80v-366L575-499l-49-49 274-172H354l-80-80h606v606Z"/>
    </Icon>
  );
});

IconMaterialMailOff.displayName = 'AmauiIconMaterialMailOff';

export default IconMaterialMailOff;
