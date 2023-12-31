import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCsvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CsvFilled'

      short_name='Csv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M190-360h160v-60H250v-120h100v-60H190v240Zm196 0h160v-146H446v-34h100v-60H386v144h100v36H386v60Zm264 0h60l70-240h-60l-40 138-40-138h-60l70 240ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialCsvFilled.displayName = 'AmauiIconMaterialCsvFilled';

export default IconMaterialCsvFilled;
