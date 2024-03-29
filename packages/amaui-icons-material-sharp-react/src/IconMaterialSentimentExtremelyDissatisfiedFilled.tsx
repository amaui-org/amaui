import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentExtremelyDissatisfiedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentExtremelyDissatisfiedFilled'

      short_name='SentimentExtremelyDissatisfied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm1.5-11.1.5-.3q.05.575.475.987Q14.9 12 15.5 12q.625 0 1.062-.438Q17 11.125 17 10.5q0-.4-.175-.725-.175-.325-.475-.525l.65-.375L16.5 8 13 10Zm-3 0 .5-.9-3.5-2-.5.875.65.375q-.3.2-.475.525T7 10.5q0 .625.438 1.062Q7.875 12 8.5 12q.6 0 1.025-.413.425-.412.475-.987ZM12 13q-1.775 0-3.125 1.137-1.35 1.138-1.9 2.863h10.05q-.55-1.725-1.9-2.863Q13.775 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialSentimentExtremelyDissatisfiedFilled.displayName = 'AmauiIconMaterialSentimentExtremelyDissatisfiedFilled';

export default IconMaterialSentimentExtremelyDissatisfiedFilled;
