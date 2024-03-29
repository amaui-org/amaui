import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffFilled'

      short_name='DirectionsAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.975 18.8-2.6 2.6q-.3.3-.662.45-.363.15-.738.15t-.737-.15q-.363-.15-.663-.45l-8-8q-.3-.3-.45-.662-.15-.363-.15-.738t.15-.738q.15-.362.45-.662l2.6-2.6-3.8-3.8q-.3-.3-.3-.713 0-.412.3-.712t.712-.3q.413 0 .713.3l18.375 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.713.3-.412 0-.712-.3Zm-2.9-2.9-1.425-1.4-.4.4q-.275.275-.275.687 0 .413.3.713.275.275.7.275.425 0 .7-.275ZM10.15 13l-2-2h-.175q-.425 0-.712.287-.288.288-.288.713t.288.712q.287.288.712.288Zm5.775 0 .325-.3q.325-.275.312-.7-.012-.425-.312-.725L12.675 7.7q-.3-.3-.7-.3-.4 0-.7.3-.1.1-.162.2-.063.1-.113.225L8.025 5.15l2.55-2.55q.3-.3.663-.45.362-.15.737-.15t.738.15q.362.15.662.45l8 8q.3.3.45.662.15.363.15.738t-.15.738q-.15.362-.45.662l-2.55 2.55Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltOffFilled.displayName = 'AmauiIconMaterialDirectionsAltOffFilled';

export default IconMaterialDirectionsAltOffFilled;
