import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChildCare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildCare'

      short_name='ChildCare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 11.75q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm-5 0q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363ZM12 17q-1.5 0-2.712-.825Q8.075 15.35 7.5 14h9q-.575 1.35-1.787 2.175Q13.5 17 12 17Zm0 4q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 13.875 3 12t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.925Q10.125 3 12 3t3.513.712q1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q21 10.125 21 12t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 21 12 21Zm0-2q2.9 0 4.95-2.05Q19 14.9 19 12q0-2.9-2.05-4.95Q14.9 5 12 5h-.3q-.15 0-.3.05-.15.15-.2.325-.05.175-.05.375 0 .525.362.887.363.363.888.363.225 0 .412-.075.188-.075.388-.075.3 0 .5.225t.2.525q0 .575-.537.737-.538.163-.963.163-1.125 0-1.937-.812-.813-.813-.813-1.938V5.6q0-.075.025-.2Q7.6 6.15 6.3 7.925 5 9.7 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm0-7Z"/>
    </Icon>
  );
});

IconMaterialChildCare.displayName = 'AmauiIconMaterialChildCare';

export default IconMaterialChildCare;
