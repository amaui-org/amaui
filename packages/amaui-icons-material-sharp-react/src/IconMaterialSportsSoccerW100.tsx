import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsSoccerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsSoccerW100'

      short_name='SportsSoccer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm4.55-10.45 1.85-.6.5-1.8q-.8-1.325-2.05-2.25-1.25-.925-2.8-1.35l-1.7 1.2V7.3Zm-9.1 0 4.2-2.95V5.45l-1.7-1.2Q8.4 4.675 7.175 5.6 5.95 6.525 5.15 7.85l.5 1.8Zm-1.4 7.15 1.7-.15 1.05-1.7L7.3 11l-1.9-.65-1.4 1q0 1.8.425 3.225T6.05 17.4ZM12 20q.65 0 1.325-.113.675-.112 1.425-.337l.9-1.95-.95-1.55H9.3l-.9 1.55.9 1.95q.675.225 1.363.337Q11.35 20 12 20Zm-2.5-4.65h5.05l1.5-4.6L12 7.9l-4.05 2.85Zm8.45 2.05q1.2-1.4 1.625-2.825Q20 13.15 20 11.35l-1.35-.95-1.95.55-1.5 4.6 1.05 1.7Z"/>
    </Icon>
  );
});

IconMaterialSportsSoccerW100.displayName = 'AmauiIconMaterialSportsSoccerW100';

export default IconMaterialSportsSoccerW100;
