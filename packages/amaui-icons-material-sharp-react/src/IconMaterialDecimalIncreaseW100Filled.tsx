import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDecimalIncreaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalIncreaseW100Filled'

      short_name='DecimalIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.25 20.425-.5-.475 2.225-2.25h-7V17h7l-2.225-2.25.5-.475 3.075 3.075Zm-12.325-7.65v-1.3h1.3v1.3Zm5.325 0q-1.05 0-1.787-.738-.738-.737-.738-1.787v-4q0-1.05.738-1.788.737-.737 1.787-.737 1.05 0 1.788.737.737.738.737 1.788v4q0 1.05-.737 1.787-.738.738-1.788.738Zm7.55 0q-1.05 0-1.788-.738-.737-.737-.737-1.787v-4q0-1.05.737-1.788.738-.737 1.788-.737t1.788.737q.737.738.737 1.788v4q0 1.05-.737 1.787-.738.738-1.788.738Zm-7.55-.7q.75 0 1.288-.538.537-.537.537-1.287v-4q0-.75-.537-1.288-.538-.537-1.288-.537t-1.287.537q-.538.538-.538 1.288v4q0 .75.538 1.287.537.538 1.287.538Zm7.55 0q.75 0 1.287-.538.538-.537.538-1.287v-4q0-.75-.538-1.288-.537-.537-1.287-.537-.75 0-1.287.537-.538.538-.538 1.288v4q0 .75.538 1.287.537.538 1.287.538Z"/>
    </Icon>
  );
});

IconMaterialDecimalIncreaseW100Filled.displayName = 'AmauiIconMaterialDecimalIncreaseW100Filled';

export default IconMaterialDecimalIncreaseW100Filled;
