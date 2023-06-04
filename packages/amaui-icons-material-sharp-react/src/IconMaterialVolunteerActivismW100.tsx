import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolunteerActivismW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolunteerActivismW100'

      short_name='VolunteerActivism'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.55 11.8q-2.225-1.8-3.662-3.462Q10.45 6.675 10.45 5.35q0-1.025.713-1.738.712-.712 1.737-.712.675 0 1.363.387.687.388 1.287 1.213.6-.825 1.288-1.213.687-.387 1.362-.387 1.025 0 1.738.712.712.713.712 1.738 0 1.325-1.437 2.988Q17.775 10 15.55 11.8Zm0-.95q1.775-1.475 3.088-2.925 1.312-1.45 1.312-2.575 0-.75-.5-1.25t-1.25-.5q-.425 0-.962.262Q16.7 4.125 16.05 5l-.5.65-.5-.65q-.65-.875-1.187-1.138-.538-.262-.963-.262-.75 0-1.25.5t-.5 1.25q0 1.125 1.313 2.575 1.312 1.45 3.087 2.925Zm0-3.625Zm-2 13.925-7.8-2.3v1.25h-3.4v-7.3h5.9l7.15 2.6v1.5h4.85v2.15ZM3.05 19.4h2v-5.9h-2Zm10.45 1 6.05-1.875V17.6h-6.9l-3.1-1 .25-.675 2.925.975H14.7v-1l-6.55-2.4h-2.4v4.6Z"/>
    </Icon>
  );
});

IconMaterialVolunteerActivismW100.displayName = 'AmauiIconMaterialVolunteerActivismW100';

export default IconMaterialVolunteerActivismW100;
