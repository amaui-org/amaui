import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitTicketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitTicketFilled'

      short_name='TransitTicket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm220-120h202q8 0 13-5t5-13v-11q0-5-2.5-9.5T590-325l-30-15q33 0 56.5-23.5T640-420v-180q0-43-37-61.5T480-680q-83 0-121.5 19T320-600v180q0 33 23.5 56.5T400-340l-29 14q-5 2-8 7t-3 11v8q0 8 6 14t14 6Zm30-100q-13 0-21.5-8.5T380-410q0-13 8.5-21.5T410-440q13 0 21.5 8.5T440-410q0 13-8.5 21.5T410-380Zm140 0q-13 0-21.5-8.5T520-410q0-13 8.5-21.5T550-440q13 0 21.5 8.5T580-410q0 13-8.5 21.5T550-380ZM380-480v-120h200v120H380Z"/>
    </Icon>
  );
});

IconMaterialTransitTicketFilled.displayName = 'AmauiIconMaterialTransitTicketFilled';

export default IconMaterialTransitTicketFilled;
