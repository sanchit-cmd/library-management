import React from 'react';

export default function Form({ onSubmitHandler }) {
	return (
		<>
			<form
				onSubmit={onSubmitHandler}
				className='bg-white rounded-xl px-6 py-8 w-96 flex flex-col justify-between gap-4 shadow-2xl'
			>
				<div className='flex flex-col gap-2 justify-between'>
					<label className='font-semibold' htmlFor='title'>
						Title
					</label>
					<input
						className='outline outline-black outline-1 rounded px-2 py-1'
						type='text'
						id='title'
						name='title'
						placeholder='One Piece'
						required
					/>
				</div>

				<div className='flex flex-col gap-2 justify-between'>
					<label className='font-semibold ' htmlFor='author'>
						Author
					</label>
					<input
						className='outline outline-black outline-1 rounded px-2 py-1'
						type='text'
						id='author'
						name='author'
						placeholder='Eiichiro Oda'
						required
					/>
				</div>

				<div className='flex flex-col gap-2 justify-between'>
					<label className='font-semibold' htmlFor='price'>
						Price
					</label>
					<input
						className='outline outline-black outline-1 rounded px-2 py-1'
						type='number'
						id='price'
						name='price'
						placeholder='₹500'
						required
					/>
				</div>
				<div>
					<button className='w-full text-white bg-blue-600 py-3 text-center rounded-lg'>
						Submit
					</button>
				</div>
			</form>
		</>
	);
}
