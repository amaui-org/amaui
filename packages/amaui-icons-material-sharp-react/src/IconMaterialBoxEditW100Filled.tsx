import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEditW100Filled'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-172v-81l132-132 82 81-132 132h-82Zm-328 0q-25 0-42.5-17.5T172-232v-438l98-118h419l99 120v46L588-422v-228H372v257l108-54 89 44-109 109v122H232Zm584-175-82-81 52-51 83 83-53 49ZM215-678h529l-69-82H284l-69 82Z"/>
    </Icon>
  );
});

IconMaterialBoxEditW100Filled.displayName = 'AmauiIconMaterialBoxEditW100Filled';

export default IconMaterialBoxEditW100Filled;
