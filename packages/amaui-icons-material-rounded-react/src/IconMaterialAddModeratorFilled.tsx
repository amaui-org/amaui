import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddModeratorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorFilled'

      short_name='AddModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm0-2q.2 0 .35-.15.15-.15.15-.35v-2h2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-2v-2q0-.2-.15-.35Q17.2 14 17 14q-.2 0-.35.15-.15.15-.15.35v2h-2q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15h2v2q0 .2.15.35.15.15.35.15Zm-5 1.925h-.238q-.112 0-.237-.05-3.275-1-5.4-4.05Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125v4.3q-.725-.325-1.462-.5Q17.8 10 17 10q-2.9 0-4.95 2.05Q10 14.1 10 17q0 1.425.5 2.663.5 1.237 1.525 2.262H12Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorFilled.displayName = 'AmauiIconMaterialAddModeratorFilled';

export default IconMaterialAddModeratorFilled;
