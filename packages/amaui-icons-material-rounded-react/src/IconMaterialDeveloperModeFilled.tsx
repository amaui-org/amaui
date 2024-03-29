import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeFilled'

      short_name='DeveloperMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 7V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v4h-2V6H7v1Zm2 16q-.825 0-1.412-.587Q5 21.825 5 21v-4h2v1h10v-1h2v4q0 .825-.587 1.413Q17.825 23 17 23Zm7.7-7.15q-.275-.3-.287-.7-.013-.4.287-.7L17.15 12 14.7 9.55q-.3-.3-.287-.7.012-.4.287-.7.3-.3.713-.313.412-.012.712.288L19.3 11.3q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-3.175 3.175q-.3.3-.712.288-.413-.013-.713-.313Zm-6.825.025L4.7 12.7q-.15-.15-.213-.325-.062-.175-.062-.375t.062-.375q.063-.175.213-.325l3.175-3.175q.3-.3.713-.288.412.013.712.313.275.3.288.7.012.4-.288.7L6.85 12l2.45 2.45q.3.3.288.7-.013.4-.288.7-.3.3-.712.313-.413.012-.713-.288Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeFilled.displayName = 'AmauiIconMaterialDeveloperModeFilled';

export default IconMaterialDeveloperModeFilled;
