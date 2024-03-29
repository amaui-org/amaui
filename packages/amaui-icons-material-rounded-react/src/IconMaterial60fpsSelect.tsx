import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial60fpsSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsSelect'

      short_name='60fpsSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14q-.825 0-1.412-.588Q4 12.825 4 12V6q0-.825.588-1.412Q5.175 4 6 4h4q.425 0 .713.287Q11 4.575 11 5t-.287.713Q10.425 6 10 6H6v2h3q.825 0 1.413.587Q11 9.175 11 10v2q0 .825-.587 1.412Q9.825 14 9 14Zm0-4v2h3v-2Zm9 4q-.825 0-1.412-.588Q13 12.825 13 12V6q0-.825.588-1.412Q14.175 4 15 4h3q.825 0 1.413.588Q20 5.175 20 6v6q0 .825-.587 1.412Q18.825 14 18 14Zm3-2V6h-3v6ZM4 22q-.425 0-.712-.288Q3 21.425 3 21v-3q0-.425.288-.712Q3.575 17 4 17t.713.288Q5 17.575 5 18v3q0 .425-.287.712Q4.425 22 4 22Zm4 0q-.425 0-.713-.288Q7 21.425 7 21v-3q0-.425.287-.712Q7.575 17 8 17t.713.288Q9 17.575 9 18v3q0 .425-.287.712Q8.425 22 8 22Zm4 0q-.425 0-.712-.288Q11 21.425 11 21v-3q0-.425.288-.712Q11.575 17 12 17t.713.288Q13 17.575 13 18v3q0 .425-.287.712Q12.425 22 12 22Zm4 0q-.425 0-.712-.288Q15 21.425 15 21v-3q0-.425.288-.712Q15.575 17 16 17h4q.425 0 .712.288.288.287.288.712v3q0 .425-.288.712Q20.425 22 20 22Z"/>
    </Icon>
  );
});

IconMaterial60fpsSelect.displayName = 'AmauiIconMaterial60fpsSelect';

export default IconMaterial60fpsSelect;
