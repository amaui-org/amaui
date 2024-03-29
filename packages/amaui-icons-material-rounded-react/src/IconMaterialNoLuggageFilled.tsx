import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoLuggageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageFilled'

      short_name='NoLuggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.775 22.6-7.025-7.025v-2.85l6.25 6.25V19q0 .825-.587 1.413Q17.825 21 17 21q0 .425-.288.712Q16.425 22 16 22t-.712-.288Q15 21.425 15 21H9q0 .425-.287.712Q8.425 22 8 22t-.713-.288Q7 21.425 7 21q-.825 0-1.412-.587Q5 19.825 5 19V8q0-.825.463-1.412Q5.925 6 6.025 6l.9.9v2.85L1.375 4.2q-.3-.3-.288-.713.013-.412.313-.712t.713-.3q.412 0 .712.3l18.375 18.4q.3.3.288.713-.013.412-.313.712t-.7.3q-.4 0-.7-.3Zm-7.025-7.025-1.5-1.5v3.175q0 .325.213.538.212.212.537.212.325 0 .538-.212.212-.213.212-.538Zm-3.25-3.25-1.5-1.5v6.425q0 .325.213.538.212.212.537.212.325 0 .538-.212.212-.213.212-.538ZM10.5 6h3V3.5h-3ZM19 16.125l-3-3V9.75q0-.325-.212-.538Q15.575 9 15.25 9q-.325 0-.537.212-.213.213-.213.538v1.875L8.875 6H9V3q0-.425.288-.713Q9.575 2 10 2h4q.425 0 .713.287Q15 2.575 15 3v3h2q.825 0 1.413.588Q19 7.175 19 8Zm-4.5-.15v1.275q0 .325.213.538.212.212.537.212.325 0 .538-.212.212-.213.212-.538v-1.275Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageFilled.displayName = 'AmauiIconMaterialNoLuggageFilled';

export default IconMaterialNoLuggageFilled;
