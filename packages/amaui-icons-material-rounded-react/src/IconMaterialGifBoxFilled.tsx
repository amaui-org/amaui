import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGifBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifBoxFilled'

      short_name='GifBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 14h1q.425 0 .713-.288.287-.287.287-.712v-.5q0-.2-.15-.35Q10.2 12 10 12q-.2 0-.35.15-.15.15-.15.35v.5h-1v-2H10q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q10.2 10 10 10H8.5q-.425 0-.712.287-.288.288-.288.713v2q0 .425.288.712.287.288.712.288Zm3.5 0q.2 0 .35-.15.15-.15.15-.35v-3q0-.2-.15-.35Q12.2 10 12 10q-.2 0-.35.15-.15.15-.15.35v3q0 .2.15.35.15.15.35.15Zm2 0q.2 0 .35-.15.15-.15.15-.35v-1h1q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-1V11H16q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q16.2 10 16 10h-2q-.2 0-.35.15-.15.15-.15.35v3q0 .2.15.35.15.15.35.15Zm-9 7q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialGifBoxFilled.displayName = 'AmauiIconMaterialGifBoxFilled';

export default IconMaterialGifBoxFilled;
