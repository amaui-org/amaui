import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWhereToVote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhereToVote'

      short_name='WhereToVote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.95 12.925q.2 0 .375-.063.175-.062.325-.212L15.2 9.1q.275-.275.275-.7 0-.425-.275-.725-.3-.275-.725-.275t-.7.275L10.95 10.5l-.7-.7q-.275-.275-.7-.275-.425 0-.7.275-.3.3-.3.725t.3.7l1.4 1.425q.15.15.325.212.175.063.375.063ZM12 19.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075ZM12 10.2Z"/>
    </Icon>
  );
});

IconMaterialWhereToVote.displayName = 'AmauiIconMaterialWhereToVote';

export default IconMaterialWhereToVote;
