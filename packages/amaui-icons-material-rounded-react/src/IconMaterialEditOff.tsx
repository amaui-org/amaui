import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOff'

      short_name='EditOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.1 21.875-6.375-6.35L7.55 20.7q-.15.15-.337.225-.188.075-.388.075H4q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387.075-.188.225-.338l5.175-5.175L2.1 4.9q-.3-.3-.288-.7.013-.4.313-.7.3-.3.713-.3.412 0 .712.3l16.975 16.975q.3.3.3.7 0 .4-.3.7-.3.3-.713.3-.412 0-.712-.3ZM10.6 13.4l-.7-.7.7.7.7.7Zm4.975-.725L14.15 11.25l.875-.875-1.4-1.4-.875.875-1.425-1.425L13.6 6.15l4.25 4.25Zm3.725-3.75-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387Zm-5.85 1.625ZM5 19h1.4l4.9-4.9-1.4-1.4L5 17.6Z"/>
    </Icon>
  );
});

IconMaterialEditOff.displayName = 'AmauiIconMaterialEditOff';

export default IconMaterialEditOff;
