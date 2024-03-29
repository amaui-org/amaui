import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiTransportation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiTransportation'

      short_name='EmojiTransportation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22q-.425 0-.712-.288Q10 21.425 10 21v-5.225q0-.05.05-.25l1.35-3.875q.125-.275.362-.462Q12 11 12.35 11h7.3q.35 0 .588.188.237.187.362.462l1.35 3.875.05.25V21q0 .425-.288.712Q21.425 22 21 22t-.712-.288Q20 21.425 20 21v-.5h-8v.5q0 .425-.287.712Q11.425 22 11 22Zm1-7.5h8l-.7-2h-6.6Zm-.5 1.5v3Zm1.5 2.5q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q13.425 16.5 13 16.5t-.712.288Q12 17.075 12 17.5t.288.712q.287.288.712.288Zm6 0q.425 0 .712-.288.288-.287.288-.712t-.288-.712Q19.425 16.5 19 16.5t-.712.288Q18 17.075 18 17.5t.288.712q.287.288.712.288ZM6 14v-2h2v2Zm5-6V6h2v2ZM6 18v-2h2v2Zm0 4v-2h2v2Zm-4 0V10q0-.825.588-1.413Q3.175 8 4 8h3V4q0-.825.588-1.413Q8.175 2 9 2h6q.825 0 1.413.587Q17 3.175 17 4v5h-2V4H9v6H4v12Zm9.5-3h9v-3h-9Z"/>
    </Icon>
  );
});

IconMaterialEmojiTransportation.displayName = 'AmauiIconMaterialEmojiTransportation';

export default IconMaterialEmojiTransportation;
