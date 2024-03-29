import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIosShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShareFilled'

      short_name='IosShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q-.425 0-.712-.288Q11 15.425 11 15V4.825l-.9.9Q9.825 6 9.413 6 9 6 8.7 5.7q-.275-.3-.275-.713 0-.412.275-.687l2.6-2.6q.125-.125.313-.2.187-.075.387-.075t.388.075q.187.075.312.2l2.6 2.6q.3.3.3.725t-.3.7Q15 6 14.588 6q-.413 0-.688-.275l-.9-.9V15q0 .425-.287.712Q12.425 16 12 16Zm-6 7q-.825 0-1.412-.587Q4 21.825 4 21V10q0-.825.588-1.413Q5.175 8 6 8h2q.425 0 .713.287Q9 8.575 9 9t-.287.712Q8.425 10 8 10H6v11h12V10h-2q-.425 0-.712-.288Q15 9.425 15 9t.288-.713Q15.575 8 16 8h2q.825 0 1.413.587Q20 9.175 20 10v11q0 .825-.587 1.413Q18.825 23 18 23Z"/>
    </Icon>
  );
});

IconMaterialIosShareFilled.displayName = 'AmauiIconMaterialIosShareFilled';

export default IconMaterialIosShareFilled;
