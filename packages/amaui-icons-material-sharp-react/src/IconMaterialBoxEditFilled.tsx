import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEditFilled'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-120v-127l151-151 127 127-151 151H560Zm-360 0q-33 0-56.5-23.5T120-200v-528l92-112h536l92 112v88L640-440v-200H320v320l160-80 80 40-80 80v160H200Zm680-193L753-440l57-57 127 127-57 57ZM216-720h528l-34-40H250l-34 40Z"/>
    </Icon>
  );
});

IconMaterialBoxEditFilled.displayName = 'AmauiIconMaterialBoxEditFilled';

export default IconMaterialBoxEditFilled;
