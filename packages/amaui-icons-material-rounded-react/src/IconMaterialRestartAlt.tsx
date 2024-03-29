import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestartAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestartAlt'

      short_name='RestartAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.825 20.7q-2.575-.725-4.2-2.837Q4 15.75 4 13q0-1.425.475-2.713Q4.95 9 5.825 7.925q.275-.3.675-.313.4-.012.725.313.275.275.288.675.012.4-.263.75-.6.775-.925 1.7Q6 11.975 6 13q0 2.025 1.188 3.613 1.187 1.587 3.062 2.162.325.1.538.375.212.275.212.6 0 .5-.35.788-.35.287-.825.162Zm4.35 0q-.475.125-.825-.175t-.35-.8q0-.3.213-.575.212-.275.537-.375 1.875-.6 3.062-2.175Q18 15.025 18 13q0-2.5-1.75-4.25T12 7h-.075l.4.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-2.1-2.1q-.15-.15-.212-.325Q8.55 6.2 8.55 6t.063-.375q.062-.175.212-.325l2.1-2.1q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-.4.4H12q3.35 0 5.675 2.325Q20 9.65 20 13q0 2.725-1.625 4.85-1.625 2.125-4.2 2.85Z"/>
    </Icon>
  );
});

IconMaterialRestartAlt.displayName = 'AmauiIconMaterialRestartAlt';

export default IconMaterialRestartAlt;
