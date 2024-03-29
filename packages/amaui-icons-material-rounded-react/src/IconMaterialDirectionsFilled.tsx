import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsFilled'

      short_name='Directions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 12h3.5v1.3q0 .35.3.475t.55-.125l1.95-1.95q.3-.3.3-.7 0-.4-.3-.7l-1.95-1.95q-.25-.25-.55-.125-.3.125-.3.475V10H9q-.425 0-.712.287Q8 10.575 8 11v3q0 .425.288.712Q8.575 15 9 15t.713-.288Q10 14.425 10 14Zm2 10q-.375 0-.738-.15-.362-.15-.662-.45l-8-8q-.3-.3-.45-.662Q2 12.375 2 12t.15-.738q.15-.362.45-.662l8-8q.3-.3.662-.45Q11.625 2 12 2t.738.15q.362.15.662.45l8 8q.3.3.45.662.15.363.15.738t-.15.738q-.15.362-.45.662l-8 8q-.3.3-.662.45-.363.15-.738.15Z"/>
    </Icon>
  );
});

IconMaterialDirectionsFilled.displayName = 'AmauiIconMaterialDirectionsFilled';

export default IconMaterialDirectionsFilled;
