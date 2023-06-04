import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationAwayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAwayW100'

      short_name='LocationAway'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V9.65L10 4.575l3.925 2.975-.325.187q-.15.088-.3.213L10 5.45 4 10v9h4.65v.7Zm7.35 0v-1.15q0-.325.188-.588.187-.262.462-.437 1.075-.65 2.262-.963Q14.75 16.25 16 16.25q1.25 0 2.438.312 1.187.313 2.262.963.275.175.463.437.187.263.187.588v1.15Zm.7-.7h9.3v-.7q-1.075-.625-2.237-.988Q17.25 16.95 16 16.95q-1.25 0-2.412.362-1.163.363-2.238.988ZM16 13.825q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688Zm0-.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163-.488-.487-1.163-.487t-1.162.487q-.488.488-.488 1.163t.488 1.162q.487.488 1.162.488Z"/>
    </Icon>
  );
});

IconMaterialLocationAwayW100.displayName = 'AmauiIconMaterialLocationAwayW100';

export default IconMaterialLocationAwayW100;
