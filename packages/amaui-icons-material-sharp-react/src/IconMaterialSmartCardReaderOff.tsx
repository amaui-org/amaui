import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartCardReaderOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartCardReaderOff'

      short_name='SmartCardReaderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-932v540h-28l-52-52v-408H273l-80-80h567ZM589-536 485-639q9-23 29-38t46-15q33 0 56.5 23.5T640-612q0 26-14 46.5T589-536Zm-269 86v-242l118 118q-7 57-32 90.5T343-450h-23ZM160-212h527l-40-40H160v40ZM819-80l-52-52H80v-200h487L280-620v228h-80v-308L28-872l56-56 792 791-57 57ZM424-212Zm52-436Zm-82 142Z"/>
    </Icon>
  );
});

IconMaterialSmartCardReaderOff.displayName = 'AmauiIconMaterialSmartCardReaderOff';

export default IconMaterialSmartCardReaderOff;
