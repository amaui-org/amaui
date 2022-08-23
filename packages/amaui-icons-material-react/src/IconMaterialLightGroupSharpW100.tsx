import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightGroupSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupSharpW100'
      short_name='LightGroup'

      {...props}
    >
      <path d="M3.65 20.7V20h6.7v.7ZM17 19.75q-.575 0-.987-.425-.413-.425-.413-1h-3.25V17.7q.05-1.55 1.338-2.575 1.287-1.025 2.962-1.15v-9.4h.7v9.4q1.7.125 2.987 1.15 1.288 1.025 1.338 2.575v.625h-3.25q0 .575-.412 1-.413.425-1.013.425Zm-10.35-1.4V11H2.4l1.7-6.4h5.825l1.7 6.4H7.35v7.35Zm6.45-.7h7.8q-.125-1.4-1.275-2.2-1.15-.8-2.625-.8-1.45 0-2.612.8-1.163.8-1.288 2.2ZM3.3 10.3h7.4l-1.325-5H4.65ZM7 7.8Zm10 8.35Z"/>
    </Icon>
  );
});

IconMaterialLightGroupSharpW100.displayName = 'AmauiIconMaterialLightGroupSharpW100';

export default IconMaterialLightGroupSharpW100;
