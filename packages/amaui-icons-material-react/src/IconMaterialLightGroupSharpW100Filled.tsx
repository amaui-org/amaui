import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightGroupSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupSharpW100Filled'
      short_name='LightGroup'

      {...props}
    >
      <path d="M3.65 20.7V20h6.7v.7ZM17 19.75q-.575 0-.987-.425-.413-.425-.413-1h-3.25V17.7q.05-1.55 1.338-2.575 1.287-1.025 2.962-1.15v-9.4h.7v9.4q1.7.125 2.987 1.15 1.288 1.025 1.338 2.575v.625h-3.25q0 .575-.412 1-.413.425-1.013.425Zm-10.35-1.4V11H2.4l1.7-6.4h5.825l1.7 6.4H7.35v7.35Z"/>
    </Icon>
  );
});

IconMaterialLightGroupSharpW100Filled.displayName = 'AmauiIconMaterialLightGroupSharpW100Filled';

export default IconMaterialLightGroupSharpW100Filled;
