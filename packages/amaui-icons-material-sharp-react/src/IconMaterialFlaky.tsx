import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlaky = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flaky'

      short_name='Flaky'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22ZM7.35 11.225 8.75 9.8l1.4 1.425 1.075-1.075L9.8 8.75l1.425-1.4-1.075-1.075L8.75 7.7l-1.4-1.425L6.275 7.35 7.7 8.75l-1.425 1.4ZM12 20q3.325 0 5.663-2.337Q20 15.325 20 12q0-1.65-.625-3.1-.625-1.45-1.725-2.55l-11.3 11.3q1.1 1.1 2.55 1.725Q10.35 20 12 20Zm2.05-2.4-2.4-2.4 1.05-1.075 1.35 1.35L16.55 13l1.05 1.05Z"/>
    </Icon>
  );
});

IconMaterialFlaky.displayName = 'AmauiIconMaterialFlaky';

export default IconMaterialFlaky;
