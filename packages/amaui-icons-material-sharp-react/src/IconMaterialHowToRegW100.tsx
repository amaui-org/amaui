import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHowToRegW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToRegW100'

      short_name='HowToReg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.225 18.2v-1.3q0-.75.363-1.138.362-.387.887-.662 1.275-.65 2.4-.975Q8 13.8 9.925 13.8q.75 0 1.288.037.537.038.912.113l-.65.65q-.275-.05-.687-.075-.413-.025-.863-.025-1.775 0-2.987.35-1.213.35-2.113.85-.525.275-.713.55-.187.275-.187.65v.6h5.75l.7.7Zm12 1.3-2.55-2.55.5-.5 2.05 2.05 5.05-5.05.5.5Zm-5.3-8.3q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q8.8 5.8 9.925 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-.25 6.3Zm.25-7q.825 0 1.413-.588.587-.587.587-1.412t-.587-1.412Q10.75 6.5 9.925 6.5q-.825 0-1.413.588-.587.587-.587 1.412t.587 1.412q.588.588 1.413.588Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialHowToRegW100.displayName = 'AmauiIconMaterialHowToRegW100';

export default IconMaterialHowToRegW100;
